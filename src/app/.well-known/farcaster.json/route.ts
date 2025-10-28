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
      iconUrl: "https://farcaster-demo-ten.vercel.app/icon.png",
      homeUrl: "https://farcaster-demo-ten.vercel.app",
      imageUrl: "https://farcaster-demo-ten.vercel.app/image.png",
      splashImageUrl:
        "https://farcaster-demo-ten.vercel.app/splash.png",
      splashBackgroundColor: "#ffffff",
      webhookUrl: "https://farcaster-demo-ten.vercel.app/api/webhook",
      subtitle: "connect and interview",
      description: "connect and interview",
      primaryCategory: "social",
    },
  };

  return Response.json(config);
}
