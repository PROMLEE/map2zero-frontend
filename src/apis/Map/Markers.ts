import { authAPI } from '../customApi';

const Markers = async (myLocation: { latitude: number; longitude: number }) => {
  try {
    const response = await authAPI.get(`/stores/map`, { params: { x: myLocation.longitude, y: myLocation.latitude } });
    return response.data;
  } catch (e) {
    console.log(e);
    alert('연동 에러');
  }
};

export default Markers;
