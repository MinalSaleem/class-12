import { SessionWrapper } from "../../components/SessionWrapper";
import { auth } from "../../lib/auth";
import SignInPage from "../../components/login/Login";
import SignOutPage from "../../components/login/SignOut";

export default async function Home() {
  const session = await auth();
  const isAuthentication = !!session?.user

  return (
    <div className="bg-[url('/image.jpg')] bg-cover bg-center bg-no-repeat min-h-screen opacity-">
      <SessionWrapper>

        {isAuthentication
          ? <SignOutPage />
          : <SignInPage />
        }
      </SessionWrapper> 

    </div>
  );
}