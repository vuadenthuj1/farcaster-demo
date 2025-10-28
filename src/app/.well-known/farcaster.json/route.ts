export async function GET() {
  const appUrl = "";

  const config = {
    accountAssociation: {
      header:
        "eyJmaWQiOjE0MTk2MzQsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHgyMTE3NGFkMDg0ODg4ODAzNjk0ZjEyZTQzZTQ3NkY0ZENmYURCNjg5In0",
      payload: "eyJkb21haW4iOiJmYXJjYXN0ZXItZGVtby10ZW4udmVyY2VsLmFwcCJ9",
      signature:
        "4z1cZrcYYH+G3a4tLFle23cDeEMlIX5/5+zvtjeZZDxgXse4A74+B0wRd2Y6mrHAsoaEQ+89CRfmW9e+jWPpbhs=",
    },
    frame: {
      name: "Interview app",
      version: "1",
      iconUrl: "https://farcaster-demo-ten.vercel.app/icon.png",
      homeUrl: "https://farcaster-demo-ten.vercel.app",
      imageUrl: "https://farcaster-demo-ten.vercel.app/image.png",
      splashImageUrl: "https://farcaster-demo-ten.vercel.app/splash.png",
      splashBackgroundColor: "#ffffff",
      webhookUrl: "https://farcaster-demo-ten.vercel.app/api/webhook",
      subtitle: "connect and interview",
      description: "connect and interview",
      primaryCategory: "social",
    },
  };

  return Response.json(config);
}
