import styled from 'styled-components';

export const BackgroundImage = styled.img`
  position: absolute;
  top: 80px;
  left: 0px;
  height: 100vh;
  width: 100%;
  background-image: url('https://th.bing.com/th/id/R.71b627c6c5cd3c18bfb8083587cc8df9?rik=buHnuLLLViRUjA&riu=http%3a%2f%2fwww.khqihuo.com%2fuploads%2fallimg%2f211111%2f24-211111105252V9.jpg&ehk=plD8zC%2fWdyGTNy2chM8iD7craQPebbUpeTiS9wh6dMY%3d&risl=&pid=ImgRaw&r=0');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.8;
  z-index: -1;

  @media only screen and (max-width: 600px) {
    top: 110px;
  }
`;