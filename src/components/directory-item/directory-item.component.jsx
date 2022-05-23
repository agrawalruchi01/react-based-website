import {BackgroundImage , DirectoryBodyContainer, DirectoryContainer} from "./directory-item.styles.jsx"
import { useNavigate} from "react-router-dom";

const DirectoryItem = ({ category }) => {
    const { imageUrl, title } = category;
    const navigate = useNavigate();

    const OnNavigateHandler = () => {
        return navigate("shop/" + title)
    }
    return  <DirectoryContainer onClick={OnNavigateHandler}>
        <BackgroundImage
            imageUrl = {imageUrl}>
        </BackgroundImage>
        <DirectoryBodyContainer>
            <h2>{title}</h2>
            <p>Shop Now</p>
        </DirectoryBodyContainer>
    </DirectoryContainer>
}

export default DirectoryItem;