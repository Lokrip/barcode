import styles from "./card-avatar.module.scss";
import { CardAvatarProps } from "../../_model/types/_card-avatar-props";

export const CardAvatar: CardAvatarProps = ({ avatar, slot }) => {
    return (
        avatar && (
            <div
                data-testid={slot}
                {...(slot !== undefined ? { slot } : {})}
                className={styles.avatar}
            >
                {avatar}
            </div>
        )
    );
};
