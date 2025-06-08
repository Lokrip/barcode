import styles from "../styles/card-avatar.module.scss";
import { CardAvatarProps } from "../_model/types/_card-avatar-props";

export const CardAvatar: CardAvatarProps = ({ avatar, slot }) => {
    return (
        avatar && (
            <div
                {...(slot !== undefined ? { slot } : {})}
                className={styles.avatar}
            >
                {avatar}
            </div>
        )
    );
};
