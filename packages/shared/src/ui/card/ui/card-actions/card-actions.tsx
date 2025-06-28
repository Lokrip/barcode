import styles from "./card-actions.module.scss";
import { CardActionsProps } from "../../_model/types/_card-actions-props";

export const CardActions: CardActionsProps = ({ actions, slot }) => {
    return (
        actions && (
            <div
                data-testid={slot}
                {...(slot !== undefined ? { slot } : {})}
                className={styles.actions}
            >
                {actions}
            </div>
        )
    );
};
