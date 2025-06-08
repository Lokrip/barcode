import styles from "../styles/card-actions.module.scss";
import { CardActionsProps } from "../_model/types/_card-actions-props";

export const CardActions: CardActionsProps = ({ actions, slot }) => {
    return (
        actions && (
            <div
                {...(slot !== undefined ? { slot } : {})}
                className={styles.actions}
            >
                {actions}
            </div>
        )
    );
};
