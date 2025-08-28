// interface PaymentHistory

export interface PaymentHistory {
  id: string;
  title: string;
  amount: number;
  paymentDate: string;
  status: "pending" | "confirmed" | "rejected";
  proofUrl?: string;
}
