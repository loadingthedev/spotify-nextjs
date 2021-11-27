import { signIn, getProviders } from "next-auth/react";

const Login = ({ providers }) => {
  // console.log(Object.values(providers));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-black">
      <img className="w-52 mb-3" src="https://links.papareact.com/9xl" alt="" />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="bg-[#18D860] text-white p-5 rounded-full"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};
export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();
  // console.log(providers);

  return {
    props: {
      providers,
    },
  };
}
