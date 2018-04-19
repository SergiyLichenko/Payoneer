export interface IPayment {
    id: number;
    accountHolderId: string;
    accountHolderName: string;
    paymentDate: Date;
    amount: number;
    currency: string;
    status: number;
    statusDescription: string;
    reason: string;
}