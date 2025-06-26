import { useLocation, useNavigate } from "react-router-dom";
import { useCallback } from "react";

/**
 * Hook giúp chuyển về trang chủ (nếu cần) và cuộn mượt mà đến section mong muốn.
 * @returns (sectionId: string) => void
 */
export function useSmoothScrollToSection() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = useCallback(
    (sectionId: string) => {
      const scroll = () => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      };
      if (location.pathname !== "/") {
        navigate("/", { replace: false });
        // Đợi route chuyển xong rồi mới scroll
        setTimeout(scroll, 100);
      } else {
        scroll();
      }
    },
    [location.pathname, navigate]
  );

  return scrollToSection;
}
