import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';




function NasaCard(props) {

    const { title, date, explanation, url } = props.data;

    console.log(title, date, explanation, url);

    return (
        <Card>
            <Image src={url} alt="nasa" />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className="date">{date}</span>
                </Card.Meta>
                <Card.Description>
                    {explanation}
                </Card.Description>
                <Icon name="image" />
            </Card.Content>

        </Card>

        // <div className="nasa-card">
        //     <img src={url} alt="nasa"></img>
        //     <p>{title}</p>
        //     <p>{date}</p>
        //     <p>{explanation}</p>
        // </div>
    )
}

export default NasaCard;
