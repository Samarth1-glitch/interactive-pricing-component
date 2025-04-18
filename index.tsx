import PricingSlider from "@/components/PricingSlider";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold">Interactive Pricing</h1>
      <PricingSlider />
    </div>
  );
}
