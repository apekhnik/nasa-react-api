import React, { useState, useEffect } from "react";
import APOD from "../container/nasaData/APOD";
import Container from "../component/Container/Container";
import ContainerItem from "../component/Container/ContainerItem";
import Loader from "../component/Loader/Loader";
import ControlForm from "../component/Form/Form";
const countOfdaysInMounth = (day, arg) => {
  const mounth =
    arg === "prev" ? Number(day.slice(5, 7)) - 1 : Number(day.slice(5, 7));
  switch (mounth) {
    case 1:
      return 31;
    case 2:
      return 28;
    case 3:
      return 31;
    case 4:
      return 30;
    case 5:
      return 31;
    case 6:
      return 30;
    case 7:
      return 31;
    case 8:
      return 31;
    case 9:
      return 30;
    case 10:
      return 31;
    case 11:
      return 30;
    case 12:
      return 31;
    default:
      break;
  }
};
const APODpage = () => {
  const [currentDay, setCurrentDay] = useState("2017-06-4");
  const [load, setLoad] = useState(false);
  const [stateRange, setRange] = useState({
    prev: ["2015-05-05", "2015-05-06", "2015-05-07"],
    next: ["2015-05-09", "2015-05-10", "2015-05-11"],
  });

  useEffect(() => {}, []);

  const onDayChange = (day) => {
    const daysRangePrev = [];
    const daysRangeNext = [];

    setLoad(true);
    for (let i = 1; i < 4; i++) {
      daysRangePrev.push(`${day.slice(0, 8)}${Number(day.slice(8)) - i}`);
    }
    for (let i = 1; i < 4; i++) {
      daysRangeNext.push(`${day.slice(0, 8)}${Number(day.slice(8)) + i}`);
    }
    setCurrentDay(day);
    setRange({
      prev: daysRangePrev,
      next: daysRangeNext,
    });
    setTimeout(() => {
      console.log(stateRange);
      setLoad(false);
    }, 100);
  };

  const swipeNext = (day) => {
    const nextDay = `${day.slice(0, 8)}${Number(day.slice(8)) + 1}`;
    const mounth = Number(day.slice(5, 7)),
      year = Number(day.slice(0, 4));
    console.log(countOfdaysInMounth(day));
    if (Number(day.slice(8)) === countOfdaysInMounth(day, "next")) {
      if (mounth === 12) {
        console.log(`${year + 1}-${1}-${1}`);
        onDayChange(`${year + 1}-${1}-${1}`);
      } else {
        console.log(`${day.slice(0, 5)}0${mounth + 1}-${1}`);
        onDayChange(`${day.slice(0, 5)}0${mounth + 1}-${1}`);
      }
    } else {
      onDayChange(nextDay);
    }
    console.log(mounth);
  };
  const swipePrev = (day) => {
    const preDays = `${day.slice(0, 8)}${Number(day.slice(8)) - 1}`;
    let mounth = Number(day.slice(6, 7)),
      year = Number(day.slice(0, 4));
    if (Number(day.slice(8)) - 1 === 1) {
      if (mounth === 1) {
        onDayChange(`${year - 1}-${12}-${31}`);
      } else {
        onDayChange(
          `${year}-0${day.slice(6, 7) - 1}-${countOfdaysInMounth(day, "prev")}`
        );
      }
    } else {
      onDayChange(preDays);
    }
  };

  if (load) {
    return <Loader />;
    // return <NASASEARCHLoader/>
  }
  return (
    <div className="App">
      <Container>
        <ContainerItem>
          {stateRange.prev.map((item) => {
            console.log(item);
            return (
              <APOD
                date={item.toString()}
                size="min"
                onClick={() => {
                  onDayChange(item.toString());
                }}
              />
            );
          })}
        </ContainerItem>
        <ContainerItem>
          <ControlForm
            inputType="date"
            inputValue={currentDay}
            inputOnchange={(e) => {
              setCurrentDay(e.target.value);
            }}
            onClickPrev={() => {
              swipePrev(currentDay);
            }}
            onClickNext={() => {
              swipeNext(currentDay);
            }}
            onClickLoad={() => {
              onDayChange(currentDay);
            }}
          />

          <APOD size="full" date={currentDay} />
          {/* <iframe id="ytplayer" type="text/html" width='240px' height='120px'
              src='https://player.vimeo.com/video/128714112?color=ffffff&byline=0&portrait=0'
              frameBorder="0"/> */}
        </ContainerItem>
        <ContainerItem>
          {stateRange.next.map((item) => {
            return (
              <APOD
                date={item.toString()}
                size="min"
                onClick={() => {
                  onDayChange(item.toString());
                }}
              />
            );
          })}
        </ContainerItem>
      </Container>
    </div>
  );
};
export default APODpage;
