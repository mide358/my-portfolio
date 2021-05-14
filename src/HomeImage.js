import React from 'react'
import Background from './images/prog1.jpeg'


const styles={
    imageContainer: {

      backgroundImage: `url(${Background})`,
      height: '100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      width:'100%',
      position:'fixed'
    },

    imageCover:{

      width:'100vw',
      height:'100vh',
      backgroundColor: '#0f0e17',
      backgroundSize:'cover',
      opacity:'0.7'
    }
}
const HomeImage = () => {
  return (

    <div style={styles.imageContainer}>
      <div style={styles.imageCover}></div>

    </div>
   );
}

export default HomeImage;