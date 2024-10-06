// import { useEffect } from "react";

// const UP_KEYS = ["w", "ArrowUp"];
// const DOWN_KEYS = ["s", "ArrowDown"];
// const LEFT_KEYS = ["a", "ArrowLeft"];
// const RIGHT_KEYS = ["d", "ArrowRight"];

// export function useSwipeControls(movePlayer) {
//   let touchStartX = 0;
//   let touchStartY = 0;

//   const handleTouchStart = (e) => {
//     touchStartX = e.touches[0].clientX;
//     touchStartY = e.touches[0].clientY;
//   };

//   const handleTouchEnd = (e) => {
//     const touchEndX = e.changedTouches[0].clientX;
//     const touchEndY = e.changedTouches[0].clientY;

//     const diffX = touchEndX - touchStartX;
//     const diffY = touchEndY - touchStartY;

//     // Detect swipe direction
//     if (Math.abs(diffX) > Math.abs(diffY)) {
//       // Horizontal swipe
//       if (diffX > 0) {
//         // Swipe Right
//         movePlayer(RIGHT_KEYS);
//       } else {
//         // Swipe Left
//         movePlayer(LEFT_KEYS);
//       }
//     } else {
//       // Vertical swipe
//       if (diffY > 0) {
//         // Swipe Down
//         movePlayer(DOWN_KEYS);
//       } else {
//         // Swipe Up
//         movePlayer(UP_KEYS);
//       }
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("touchstart", handleTouchStart);
//     window.addEventListener("touchend", handleTouchEnd);
//     return () => {
//       window.removeEventListener("touchstart", handleTouchStart);
//       window.removeEventListener("touchend", handleTouchEnd);
//     };
//   }, []);
// }
