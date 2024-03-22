import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

export const useTogglePasswordVisibility = () => {
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [icon, setIcon] = useState(faEye);
  
    const handlePasswordVisibility = () => {
        if (icon == faEye) {
          setIcon(faEyeSlash);
          setPasswordVisibility(!passwordVisibility);
        } else if (icon == faEyeSlash) {
          setIcon(faEye);
          setPasswordVisibility(!passwordVisibility);
        }
      };
    
      return {
        passwordVisibility,
        icon,
        handlePasswordVisibility
      };
}