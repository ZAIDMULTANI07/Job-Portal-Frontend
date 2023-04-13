
import { UserContext } from "@/src/contexts/UserContext";
import { getCookie, removeCookie } from "@/src/utils/Cookies";

import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";

export const useNavbarView = () => {
  useEffect(() => {
    setUser(getCookie("userData"));
  }, []);

  const { user, setUser } = useContext(UserContext);

  const router = useRouter();
  const [isActive, setActive] = useState(false);
  const [isNavbarActive, setNavbar] = useState(false);
  const [toast, setToast] = useState(false);
  const submit = () => {
    setActive(false);
    removeCookie("token");
    removeCookie("userData");
    setUser(null);
    setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 2000);
    router.push("/");
  };
  if (typeof window !== "undefined") {
    const changeBackground = () => {
      var x: any = document.getElementById("navbar");
      if (window.scrollY >= 100) {
        if (x.classList === "active") {
          x.classList.remove("active");
          setNavbar(false);
        } else {
          x.classList.add("active");
          setNavbar(true);
        }
      } else {
        x.classList.remove("active");
        setNavbar(false);
      }
    };
    window.addEventListener("scroll", changeBackground);
  }

  return {
    isActive,
    submit,
    setActive,
    user,
    isNavbarActive,
    toast,
    setToast,
  };
};

export const useComponentVisible = (initialValue: boolean) => {
  const [isActive, setActive] = useState(initialValue);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { ref, isActive, setActive };
};
