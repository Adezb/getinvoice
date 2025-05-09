import prisma from "@/app/utils/db";
import { requireUser } from "@/app/utils/hooks";
import { emailClient } from "@/app/utils/mailtrap";
import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  {
    params,
  }: {
    params: Promise<{ invoiceId: string }>;
  }
) {
  try {
    const session = await requireUser();

    const { invoiceId } = await params;

    const invoiceData = await prisma.invoice.findUnique({
      where: {
        id: invoiceId,
        userId: session.user?.id,
      },
    });

    if (!invoiceData) {
      return NextResponse.json({ error: "Invoice not found" }, { status: 404 });
    }

    const sender = {
      email: "hello@demomailtrap.co",
      name: "Adebayo Pokanu",
    };

    emailClient.send({
      from: sender,
      to: [{ email: "cektopventures@gmail.com" }],
      template_uuid: "a91566df-c4bc-476b-a727-1df96504c51b",
      template_variables: {
        first_name: invoiceData.clientName,
        company_info_name: "GetInvoice",
        company_info_address: "Gbagada",
        company_info_city: "Lagos",
        company_info_zip_code: "23401",
        company_info_country: "Nigeria",
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send Email reminder" },
      { status: 500 }
    );
  }
}
