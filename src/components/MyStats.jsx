import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Link } from "react-router-dom";
import { Tooltip } from "react-bootstrap";
// import  Tooltip  from "react-tooltip";
// import Tooltip  from 'react-tooltip'

const MyStats = () => {
  return (
    <Box p={6} pt={50} pb={50} id="MyStats" bg={"linear-gradient( rgba(152, 238, 204, 0.619), rgb(152,238,204))"}>
      <Stack spacing={8}>
        {/* Title */}
        <Text className="text-center font-details-b pb-4" >
          My Github Stats
        </Text>
        Calender
        <Box w="100%" textAlign="center">
          <GitHubCalendar
            className="react-activity-calendar"
            style={{ margin: "auto", width: "80%" }}
            username="lovkumar120169"
            blockSize={20}
            hideTotalCount
          >
            <Tooltip delayShow={20} html />
          </GitHubCalendar>
        </Box>
        <br />
        <br />
        {/* Stats */}
        <div
          w="100%"
          justifyContent="space-evenly"
          alignItems="center"
          
          // flexDirection={{base:"column"}}
          className="stats-direction"
        >
          {/* Stats Card */}
          <Box
            // maxW="lg"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            mb={"20px"}
          >
            <Link to="https://github.com/lovkumar120169">
              <Image
                w="100%"
                h="auto"
                id="github-stats-card"
                src="https://github-readme-stats.vercel.app/api?username=lovkumar120169&count_private=true&show_icons=true"
              />
            </Link>
          </Box>
          {/* Top Languages */}
          <Box
            // maxW="lg"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            mb={"20px"}
          >
            <Link to="https://github.com/lovkumar120169?tab=repositories">
              <Image
                w="100%"
                h="auto"
                id="github-top-langs"
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=lovkumar120169&layout=compact"
              />
            </Link>
          </Box>
          {/* Streak Stats */}
          <Box
            // maxW="lg"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            mb={"20px"}
          >
            <Link to="https://github.com/lovkumar120169">
              <Image
                w="100%"
                h="auto"
                id="github-streak-stats"
                src="https://github-readme-streak-stats.herokuapp.com/?user=lovkumar120169"
              />
            </Link>
          </Box>
        </div>
      </Stack>
    </Box>
  );
};


export default MyStats