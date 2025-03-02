export default async function CallDetails({
  params,
}: {
  params: Promise<{ callID: string }>;
}) {
  const callID = (await params).callID;
  return (
    <div>
      <h1>Call {callID}</h1>
    </div>
  );
}
