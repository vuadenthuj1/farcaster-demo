export async function GET() {
  const appUrl = "";

  const config = {
    accountAssociation: {
      header: "",
      payload: "",
      signature: "",
    },
    frame: {
      name: "Interview app",
      version: "1",
      iconUrl: "https://https://farcaster-demo-ten.vercel.app/icon.png",
      homeUrl: "https://https://farcaster-demo-ten.vercel.app",
      imageUrl: "https://https://farcaster-demo-ten.vercel.app/image.png",
      splashImageUrl:
        "https://https://farcaster-demo-ten.vercel.app/splash.png",
      splashBackgroundColor: "#ffffff",
      webhookUrl: "https://https://farcaster-demo-ten.vercel.app/api/webhook",
      subtitle: "connect and interview",
      description: "connect and interview",
      primaryCategory: "social",
    },
  };

  return Response.json(config);
}
