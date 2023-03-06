import { Heading } from '@chakra-ui/react';

export default function Home() {
  return (
    <main>
      <Heading
        as="h1"
        size="3xl"
        textAlign="center"
        p={20}
        bg="gray.100"
        color="#2f4f4f"
        h="100vh"
        noOfLines={[1, 2, 3]}
      >
        Welcome to the Contact Book
      </Heading>
    </main>
  );
}
