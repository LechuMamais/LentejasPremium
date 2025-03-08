import { Card, Heading, Image, Text } from "@chakra-ui/react";

function CardProduct({ imageUrl, name, description }) {
  return (
    <Card>
      <Image src={imageUrl}></Image>
      <Heading>{name}</Heading>
      <Text>{description}</Text>
    </Card>
  );
}

export default CardProduct;
