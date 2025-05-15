export default async function Page() {
  type Data = {
    message: string;
    description: string;
  };

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/test`);

  const data: Data = await response.json();

  return (
    <div>
      <h1>{data.message}</h1>
      <p>{data.description}</p>
    </div>
  );
}
