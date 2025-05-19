import RestaurantDetails from "@/components/RestaurantDetails";

export default async function RestaurantPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <RestaurantDetails id={id} />
    </div>
  );
}
