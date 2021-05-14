import Button from 'react-bootstrap/Button';


const PorfolioButton = (props) => {


  return (
    <div className="text-center btn-port">
    <Button  href={props.url} type="button" variant="primary" block className="btn-new" onClick={props.handleClick}> visit project </Button>
  </div>
   );
}

export default PorfolioButton;