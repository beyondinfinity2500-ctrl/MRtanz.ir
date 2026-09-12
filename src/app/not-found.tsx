import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";

export default function NotFound() {
  return (
    <div className="container-main py-16 text-center">
      <h1 className="text-6xl font-extrabold text-surface-200 mb-4">۴۰۴</h1>
      <h2 className="text-xl font-bold text-surface-800 mb-3">صفحه مورد نظر یافت نشد</h2>
      <p className="text-surface-500 text-sm mb-6">
        متأسفانه صفحه‌ای که دنبال آن هستید وجود ندارد یا منتقل شده است.
      </p>
      <Link
        href="/"
        className="btn-primary bg-brand-500 text-white hover:bg-brand-600"
      >
        بازگشت به خانه
      </Link>
      <AdSlot slot="CONTENT_AD" className="my-8 mx-auto max-w-lg" />
    </div>
  );
}
