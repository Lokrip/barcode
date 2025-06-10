import { FC } from "react";
import { Layouts } from "../_ui/_layouts";
import { CardFooter } from "./card-footer";
import { Avatar } from "../../avatar";
import { EllipsisVertical } from "lucide-react";
import { Button } from "../../button";
import { CardMedia } from "./card-media";
import { CardContent } from "./card-content";

export const CardProduct: FC = () => {
    return (
        <Layouts
            width={300}
            variant="glass"
            footer={
                <CardFooter
                    actions={
                        <Button variant="outlined">
                            <EllipsisVertical />
                        </Button>
                    }
                    avatar={<Avatar src="/logo.jpg" size="small" />}
                />
            }
            media={
                <CardMedia type="image" alt="Card Product" img="/logo.jpg" />
            }
            content={
                <CardContent>
                    <h3 slot="title">
                        Заголовок карточки Lorem ipsum dolor sit amet
                        consectetur adipisicing elit.
                        dasdasdasdasdasdasdas
                        asdasd
                    </h3>
                    <p slot="description">
                        Описание карточки Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Odio consequuntur, porro, recusandae
                        suscipit at dolorem sapiente voluptates provident odit
                        placeat iure laudantium sit dignissimos dolore
                        praesentium hic nulla. Corrupti, eum?
                    </p>
                </CardContent>
            }
        />
    );
};
