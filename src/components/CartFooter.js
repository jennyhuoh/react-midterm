import { Link } from 'react-router-dom';
import startCheckOut from '../images/btn-start-checkout.png';

export default function CartFooter() {
    return(
        <footer class="cartFooter">
            <Link to="/login">
                <img src={startCheckOut} className="startCheckOut" />
            </Link>
            
        </footer>
    );
}
