import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Banner = () => {
  const { googleSignIn, user } = useAuth();

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/0pGRjHRT/mental-health-wellness-composition-workplace-icons-with-human-character-worker-with-reactions-chat-b.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-black">Task Manager</h1>
          {/* <p className="mb-5">
            Organizes, tracks, and prioritizes tasks for efficient productivity
          </p> */}
          <div className="flex justify-center gap-6">
            {user ? (
              <Link to="/dashboard" className="btn btn-primary mt-4">
                Get Started
              </Link>
            ) : (
              <button className="btn btn-primary mt-4" onClick={googleSignIn}>
                Login Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
