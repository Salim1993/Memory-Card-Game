import './alert.css'


function Alert(props) {

  const showAlert = props.show

  if(showAlert) {
    setTimeout(() => {
        props.timeout()
    }, 2000)
  }

  if(showAlert) {
    return (
        <div id="alert">
          <p>Picked incorrect card. Game reset.</p>
        </div>
      );
    }
    else {
      return null;
    }
} 

export default Alert;