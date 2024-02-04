let prevDistance = 0;

type PinchZoomParameters = {
  screen: HTMLElement;
  target: HTMLElement;
  setState: React.Dispatch<React.SetStateAction<number>>;
  getState: () => { scale: number };
};

export default function pinchZoom({ screen, setState }: PinchZoomParameters) {
  screen.addEventListener('touchmove', function (event) {
    if (event.touches.length === 2) {
      const touch1 = event.touches[0];
      const touch2 = event.touches[1];
      const xDiff = touch1.clientX - touch2.clientX;
      const yDiff = touch1.clientY - touch2.clientY;
      const distance = Math.sqrt(xDiff * xDiff + yDiff * yDiff);

      if (prevDistance > 0) {
        const scaleChange = (distance - prevDistance) / 100;
        setState((prevScale) => prevScale + scaleChange);
      }

      prevDistance = distance;
    }
  });

  screen.addEventListener('touchend', function () {
    prevDistance = 0;
  });
}
