
import { useGoogleLogin } from '@react-oauth/google';
import { Button } from "@/components/ui/button";

interface GoogleLoginButtonProps {
  onSuccess: (token: string) => void;
  onError: () => void;
}

const GoogleLoginButton = ({ onSuccess, onError }: GoogleLoginButtonProps) => {
  const login = useGoogleLogin({
    onSuccess: (response) => onSuccess(response.access_token),
    onError: () => onError(),
  });

  return (
    <Button 
      onClick={() => login()}
      className="w-full bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
    >
      <img 
        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
        alt="Google" 
        className="w-5 h-5 mr-2"
      />
      Continue with Google
    </Button>
  );
};

export default GoogleLoginButton;
