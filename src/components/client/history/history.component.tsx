import React from "react";
import type { PaymentHistory } from "@/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Calendar, Eye, History } from "lucide-react";

export const HistoryPayment: React.FC = () => {
  const [history, setHistory] = React.useState<PaymentHistory[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [selectedPayment, setSelectedPayment] =
    React.useState<PaymentHistory | null>(null);

  // Fetch mock data
  React.useEffect(() => {
    setTimeout(() => {
      setHistory([
        {
          id: "payment-1",
          title: "Iuran Keamanan",
          amount: 50000,
          paymentDate: "2025-08-15",
          status: "confirmed",
          proofUrl: "https://img.heroui.chat/image/finance?w=800&h=600&u=1",
        },
        {
          id: "payment-2",
          title: "Iuran Kebersihan",
          amount: 30000,
          paymentDate: "2025-08-05",
          status: "confirmed",
          proofUrl: "https://img.heroui.chat/image/finance?w=800&h=600&u=2",
        },
        {
          id: "payment-3",
          title: "Iuran Fasilitas",
          amount: 75000,
          paymentDate: "2025-08-20",
          status: "pending",
          proofUrl: "https://img.heroui.chat/image/finance?w=800&h=600&u=3",
        },
      ]);
      setIsLoading(false);
    }, 1500);
  }, []);

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "pending":
        return "Menunggu Pembayaran";
      case "confirmed":
        return "Pembayaran Diterima";
      case "rejected":
        return "Pembayaran Ditolak";
      default:
        return "Status Tidak Diketahui";
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-4">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-4 pb-20">
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-1">Riwayat Pembayaran</h2>
        <p className="text-muted-foreground text-sm">
          Lihat status dan riwayat pembayaran iuran Anda
        </p>
      </div>

      {history.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <History className="text-muted-foreground w-12 h-12 mb-4" />
          <h3 className="text-lg font-semibold">Belum Ada Riwayat</h3>
          <p className="text-muted-foreground mt-2">
            Anda belum memiliki riwayat pembayaran
          </p>
        </div>
      ) : (
        <div className="space-y-4 animate-in fade-in duration-500">
          {history.map((payment, index) => (
            <div
              key={payment.id}
              className="animate-in slide-in-from-bottom duration-300"
              style={{ animationDelay: `${index * 100}ms` }}>
              <Card className="hover:shadow-md transition-shadow duration-200">
                <CardHeader className="flex justify-between items-start">
                  <div>
                    <CardTitle>{payment.title}</CardTitle>
                    <p className="text-primary font-semibold">
                      {formatCurrency(payment.amount)}
                    </p>
                  </div>
                  <Badge className={getStatusColor(payment.status)}>
                    {getStatusText(payment.status)}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>
                      Tanggal bayar: {formatDate(payment.paymentDate)}
                    </span>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-muted transition-colors duration-200"
                        onClick={() => setSelectedPayment(payment)}>
                        <Eye className="w-4 h-4 mr-1" /> Lihat Detail
                      </Button>
                    </DialogTrigger>
                    {selectedPayment?.id === payment.id && (
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Detail Pembayaran</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold">{payment.title}</h4>
                            <p className="text-primary font-semibold">
                              {formatCurrency(payment.amount)}
                            </p>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                Tanggal Pembayaran
                              </span>
                              <span>{formatDate(payment.paymentDate)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                Status
                              </span>
                              <span className={getStatusColor(payment.status)}>
                                {getStatusText(payment.status)}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                ID Pembayaran
                              </span>
                              <span>{payment.id}</span>
                            </div>
                          </div>
                          {payment.proofUrl && (
                            <div>
                              <p className="text-sm font-medium mb-2">
                                Bukti Pembayaran
                              </p>
                              <img
                                src={payment.proofUrl}
                                alt="Bukti Pembayaran"
                                className="w-full rounded-md"
                              />
                            </div>
                          )}
                        </div>
                      </DialogContent>
                    )}
                  </Dialog>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
