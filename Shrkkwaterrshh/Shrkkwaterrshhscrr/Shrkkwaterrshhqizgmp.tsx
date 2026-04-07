import Shrkkwaterrshhlayt from '../Shrkkwaterrshhcpn/Shrkkwaterrshhlayt';

import React, {useMemo, useState} from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type ShrkkwaterrshhQizOption = {
  key: 'A' | 'B' | 'C' | 'D';
  text: string;
};

type ShrkkwaterrshhQizQuestion = {
  id: string;
  prompt: string;
  options: ShrkkwaterrshhQizOption[];
  correctKey: ShrkkwaterrshhQizOption['key'];
  explanation: string;
};

type ShrkkwaterrshhQizLevel = {
  id: string;
  title: string;
  questions: ShrkkwaterrshhQizQuestion[];
};

type ShrkkwaterrshhQizPhase = 'question' | 'explanation' | 'result';

function ShrkkwaterrshhQizTopBar({
  title,
  onExit,
}: {
  title: string;
  onExit: () => void;
}) {
  return (
    <View style={styles.shrkkwaterrshhTopBar}>
      <Pressable onPress={onExit} style={styles.shrkkwaterrshhExitBtn}>
        <Text style={styles.shrkkwaterrshhExitText}>Exit</Text>
      </Pressable>
      <View style={styles.shrkkwaterrshhTitlePill}>
        <Text style={styles.shrkkwaterrshhTitleText}>{title}</Text>
      </View>
    </View>
  );
}

function shrkkwaterrshhPickResultText(shrkkwaterrshhScore: number) {
  if (shrkkwaterrshhScore >= 4) {
    return {
      title: 'Smooth Flow',
      body: 'You move with the water, not against it.\nYour choices feel natural, controlled,\nand on point.\n\nA few sharp moves — and you’re fully\nin sync.',
    };
  }
  return {
    title: 'Off The Flow',
    body: 'Some moves felt a bit rushed or out of\nsync.\n\nNothing critical — just a few moments\nwhere control slipped.\nRun it again and catch the rhythm.',
  };
}

async function shrkkwaterrshhShareResult(args: {
  levelTitle: string;
  score: number;
  total: number;
}) {
  const message = `${args.levelTitle}\nScore: ${args.score}/${args.total}`;
  try {
    await Share.share({title: 'Water Sense Flow', message});
  } catch {
    console.log('Error sharing result');
  }
}

const Shrkkwaterrshhqizgmp = ({navigation}: any) => {
  const shrkkwaterrshhLevels: ShrkkwaterrshhQizLevel[] = useMemo(
    () => [
      {
        id: '1',
        title: 'LEVEL 1',
        questions: [
          {
            id: '1-1',
            prompt:
              'You’re about to go down a water slide. What’s the better move?',
            options: [
              {key: 'A', text: 'Go immediately'},
              {key: 'B', text: 'Wait a few seconds after the previous rider'},
              {key: 'C', text: 'Sit sideways'},
              {key: 'D', text: 'Push off standing'},
            ],
            correctKey: 'B',
            explanation:
              'Giving space between riders helps avoid unexpected contact inside the slide.',
          },
          {
            id: '1-2',
            prompt: 'You enter a wave pool. What feels more stable?',
            options: [
              {key: 'A', text: 'Stay near the edge'},
              {key: 'B', text: 'Go straight to the middle'},
              {key: 'C', text: 'Dive under waves'},
              {key: 'D', text: 'Run into the water'},
            ],
            correctKey: 'A',
            explanation:
              'Edges usually give you more control and easier access out if needed.',
          },
          {
            id: '1-3',
            prompt: 'Walking near a wet poolside — what works best?',
            options: [
              {key: 'A', text: 'Run quickly'},
              {key: 'B', text: 'Walk steadily without rushing'},
              {key: 'C', text: 'Slide your feet'},
              {key: 'D', text: 'Jump between spots'},
            ],
            correctKey: 'B',
            explanation:
              'Wet surfaces can be unpredictable, slower movement keeps balance.',
          },
          {
            id: '1-4',
            prompt: 'You’re holding goggles and heading to a slide.',
            options: [
              {key: 'A', text: 'Hold them in hand'},
              {key: 'B', text: 'Wear them securely or leave them aside'},
              {key: 'C', text: 'Toss them down first'},
              {key: 'D', text: 'Put them in your mouth'},
            ],
            correctKey: 'B',
            explanation:
              'Loose items can shift during movement and affect control.',
          },
          {
            id: '1-5',
            prompt: 'You feel slightly tired while swimming.',
            options: [
              {key: 'A', text: 'Keep pushing forward'},
              {key: 'B', text: 'Float on your back for a moment'},
              {key: 'C', text: 'Dive underwater'},
              {key: 'D', text: 'Stop moving completely'},
            ],
            correctKey: 'B',
            explanation: 'Floating helps recover energy while staying stable.',
          },
        ],
      },
      {
        id: '2',
        title: 'LEVEL 2',
        questions: [
          {
            id: '2-1',
            prompt: 'At the top of a slide, someone tells you to wait.',
            options: [
              {key: 'A', text: 'Ignore and go'},
              {key: 'B', text: 'Slide slowly'},
              {key: 'C', text: 'Look back and go'},
              {key: 'D', text: 'Wait until signaled or clear'},
            ],
            correctKey: 'D',
            explanation:
              'Slide timing is controlled to keep distance between riders.',
          },
          {
            id: '2-2',
            prompt: 'You see water flowing fast in a lazy river.',
            options: [
              {key: 'A', text: 'Go with the flow and guide yourself'},
              {key: 'B', text: 'Fight the current'},
              {key: 'C', text: 'Stop completely'},
              {key: 'D', text: 'Dive down'},
            ],
            correctKey: 'A',
            explanation:
              'Moving with the current reduces effort and keeps balance.',
          },
          {
            id: '2-3',
            prompt: 'You want to enter the pool from the side.',
            options: [
              {key: 'A', text: 'Jump randomly'},
              {key: 'B', text: 'Push others aside'},
              {key: 'C', text: 'Check space and enter smoothly'},
              {key: 'D', text: 'Dive without looking'},
            ],
            correctKey: 'C',
            explanation: 'A quick check helps avoid collisions with others.',
          },
          {
            id: '2-4',
            prompt: 'Your feet feel slippery on the stairs.',
            options: [
              {key: 'A', text: 'Move faster'},
              {key: 'B', text: 'Hold the railing and step carefully'},
              {key: 'C', text: 'Skip steps'},
              {key: 'D', text: 'Jump down'},
            ],
            correctKey: 'B',
            explanation:
              'Using support points helps keep control on wet surfaces.',
          },
          {
            id: '2-5',
            prompt: 'You drop something in the pool.',
            options: [
              {key: 'A', text: 'Dive instantly'},
              {key: 'B', text: 'Look around and retrieve calmly'},
              {key: 'C', text: 'Ignore surroundings'},
              {key: 'D', text: 'Ask someone to jump'},
            ],
            correctKey: 'B',
            explanation:
              'Awareness of others in the water keeps movement safer.',
          },
        ],
      },
      {
        id: '3',
        title: 'LEVEL 3',
        questions: [
          {
            id: '3-1',
            prompt: 'You reach a crowded pool area.',
            options: [
              {key: 'A', text: 'Push through'},
              {key: 'B', text: 'Dive over people'},
              {key: 'C', text: 'Enter where there’s space'},
              {key: 'D', text: 'Jump in quickly'},
            ],
            correctKey: 'C',
            explanation: 'Finding open space helps avoid unexpected contact.',
          },
          {
            id: '3-2',
            prompt: 'On a fast slide, your position matters.',
            options: [
              {key: 'A', text: 'Turn sideways'},
              {key: 'B', text: 'Sit properly aligned'},
              {key: 'C', text: 'Stand'},
              {key: 'D', text: 'Lie randomly'},
            ],
            correctKey: 'B',
            explanation:
              'Proper position keeps movement smooth and controlled.',
          },
          {
            id: '3-3',
            prompt: 'Someone splashes a lot near you.',
            options: [
              {key: 'A', text: 'Ignore visibility'},
              {key: 'B', text: 'Dive into it'},
              {key: 'C', text: 'Close eyes and continue'},
              {key: 'D', text: 'Move slightly away or adjust position'},
            ],
            correctKey: 'D',
            explanation: 'Clear visibility helps you react better in water.',
          },
          {
            id: '3-4',
            prompt: 'You feel unsure in deeper water.',
            options: [
              {key: 'A', text: 'Panic'},
              {key: 'B', text: 'Dive deeper'},
              {key: 'C', text: 'Stay still'},
              {key: 'D', text: 'Move toward a shallower area or edge'},
            ],
            correctKey: 'D',
            explanation: 'Shallower zones give more control and stability.',
          },
          {
            id: '3-5',
            prompt: 'You want to race a friend in the pool.',
            options: [
              {key: 'A', text: 'Push others'},
              {key: 'B', text: 'Choose a clear area first'},
              {key: 'C', text: 'Go full speed anywhere'},
              {key: 'D', text: 'Dive across'},
            ],
            correctKey: 'B',
            explanation: 'Space makes movement more predictable.',
          },
        ],
      },
      {
        id: '4',
        title: 'LEVEL 4',
        questions: [
          {
            id: '4-1',
            prompt: 'You’re exiting a slide into water.',
            options: [
              {key: 'A', text: 'Sit there'},
              {key: 'B', text: 'Move away from the landing zone quickly'},
              {key: 'C', text: 'Stay in place'},
              {key: 'D', text: 'Turn back'},
            ],
            correctKey: 'B',
            explanation: 'Clearing the landing area keeps the flow continuous.',
          },
          {
            id: '4-2',
            prompt: 'You see a “no diving” area.',
            options: [
              {key: 'A', text: 'Dive anyway'},
              {key: 'B', text: 'Jump headfirst'},
              {key: 'C', text: 'Enter feet first'},
              {key: 'D', text: 'Slide in'},
            ],
            correctKey: 'C',
            explanation:
              'Depth may vary, controlled entry keeps things predictable.',
          },
          {
            id: '4-3',
            prompt: 'You’re in a wave pool during strong waves.',
            options: [
              {key: 'A', text: 'Face away'},
              {key: 'B', text: 'Turn back'},
              {key: 'C', text: 'Face waves and stay balanced'},
              {key: 'D', text: 'Dive under'},
            ],
            correctKey: 'C',
            explanation: 'Facing waves helps maintain balance.',
          },
          {
            id: '4-4',
            prompt: 'You carry a phone near water.',
            options: [
              {key: 'A', text: 'Use it while walking'},
              {key: 'B', text: 'Hold loosely'},
              {key: 'C', text: 'Toss it'},
              {key: 'D', text: 'Keep it secured or away from water'},
            ],
            correctKey: 'D',
            explanation: 'Water and movement make objects harder to control.',
          },
          {
            id: '4-5',
            prompt: 'You want to help someone struggling.',
            options: [
              {key: 'A', text: 'Jump immediately'},
              {key: 'B', text: 'Call for help or alert staff'},
              {key: 'C', text: 'Ignore'},
              {key: 'D', text: 'Film'},
            ],
            correctKey: 'B',
            explanation:
              'Getting attention quickly often leads to faster support.',
          },
        ],
      },
      {
        id: '5',
        title: 'LEVEL 5',
        questions: [
          {
            id: '5-1',
            prompt: 'You feel cramps starting in water.',
            options: [
              {key: 'A', text: 'Swim faster'},
              {key: 'B', text: 'Move calmly to the edge or float'},
              {key: 'C', text: 'Ignore'},
              {key: 'D', text: 'Dive'},
            ],
            correctKey: 'B',
            explanation: 'Reducing effort helps manage discomfort.',
          },
          {
            id: '5-2',
            prompt: 'You’re on a multi-person slide.',
            options: [
              {key: 'A', text: 'Sit randomly'},
              {key: 'B', text: 'Follow the seating position given'},
              {key: 'C', text: 'Lean out'},
              {key: 'D', text: 'Stand'},
            ],
            correctKey: 'B',
            explanation: 'Proper positioning keeps balance for everyone.',
          },
          {
            id: '5-3',
            prompt: 'You see someone entering your lane.',
            options: [
              {key: 'A', text: 'Slow down and adjust direction'},
              {key: 'B', text: 'Speed up'},
              {key: 'C', text: 'Ignore'},
              {key: 'D', text: 'Dive'},
            ],
            correctKey: 'A',
            explanation: 'Small adjustments help avoid collisions.',
          },
          {
            id: '5-4',
            prompt: 'Water is very crowded.',
            options: [
              {key: 'A', text: 'Move fast'},
              {key: 'B', text: 'Push through'},
              {key: 'C', text: 'Stay aware and move slowly'},
              {key: 'D', text: 'Dive under people'},
            ],
            correctKey: 'C',
            explanation: 'Slower movement gives more control in busy areas.',
          },
          {
            id: '5-5',
            prompt: 'You’re leaving the pool area.',
            options: [
              {key: 'A', text: 'Run'},
              {key: 'B', text: 'Jump'},
              {key: 'C', text: 'Walk steadily and dry off if possible'},
              {key: 'D', text: 'Slide'},
            ],
            correctKey: 'C',
            explanation: 'Dryer surfaces improve grip and stability.',
          },
        ],
      },
      {
        id: '6',
        title: 'LEVEL 6',
        questions: [
          {
            id: '6-1',
            prompt: 'You’re entering a fast-moving lazy river.',
            options: [
              {key: 'A', text: 'Dive under'},
              {key: 'B', text: 'Jump straight in'},
              {key: 'C', text: 'Step in and match the flow first'},
              {key: 'D', text: 'Stand still against current'},
            ],
            correctKey: 'C',
            explanation:
              'Matching the flow helps you stay balanced from the start.',
          },
          {
            id: '6-2',
            prompt: 'You land from a slide into water. What next?',
            options: [
              {key: 'A', text: 'Stay and look around'},
              {key: 'B', text: 'Turn back'},
              {key: 'C', text: 'Sit and wait'},
              {key: 'D', text: 'Move forward and clear the area'},
            ],
            correctKey: 'D',
            explanation:
              'Clearing space keeps the landing zone open for the next rider.',
          },
          {
            id: '6-3',
            prompt: 'You’re holding onto a float in moving water.',
            options: [
              {key: 'A', text: 'Keep a steady grip and adjust slowly'},
              {key: 'B', text: 'Pull hard in random direction'},
              {key: 'C', text: 'Let go suddenly'},
              {key: 'D', text: 'Climb on quickly'},
            ],
            correctKey: 'A',
            explanation:
              'Controlled movement keeps your balance with the flow.',
          },
          {
            id: '6-4',
            prompt: 'You notice uneven footing underwater.',
            options: [
              {key: 'A', text: 'Slow down and test each step'},
              {key: 'B', text: 'Keep walking fast'},
              {key: 'C', text: 'Jump forward'},
              {key: 'D', text: 'Ignore it'},
            ],
            correctKey: 'A',
            explanation:
              'Gradual steps help you stay stable on changing surfaces.',
          },
          {
            id: '6-5',
            prompt: 'You’re about to enter a crowded pool.',
            options: [
              {key: 'A', text: 'Push through'},
              {key: 'B', text: 'Pause and find a clear spot'},
              {key: 'C', text: 'Dive in'},
              {key: 'D', text: 'Jump in quickly'},
            ],
            correctKey: 'B',
            explanation: 'A quick scan helps you avoid unexpected contact.',
          },
        ],
      },
      {
        id: '7',
        title: 'LEVEL 7',
        questions: [
          {
            id: '7-1',
            prompt: 'You lose balance slightly in water.',
            options: [
              {key: 'A', text: 'Panic'},
              {key: 'B', text: 'Spread arms and regain position'},
              {key: 'C', text: 'Dive down'},
              {key: 'D', text: 'Move faster'},
            ],
            correctKey: 'B',
            explanation: 'Stabilizing your body helps regain control quickly.',
          },
          {
            id: '7-2',
            prompt: 'You’re on a wet staircase going down.',
            options: [
              {key: 'A', text: 'Run'},
              {key: 'B', text: 'Hold the railing and move steadily'},
              {key: 'C', text: 'Skip steps'},
              {key: 'D', text: 'Jump down'},
            ],
            correctKey: 'B',
            explanation: 'Support points improve balance on slippery surfaces.',
          },
          {
            id: '7-3',
            prompt: 'Water splashes reduce your visibility.',
            options: [
              {key: 'A', text: 'Pause briefly and reorient'},
              {key: 'B', text: 'Ignore and continue'},
              {key: 'C', text: 'Dive blindly'},
              {key: 'D', text: 'Close eyes'},
            ],
            correctKey: 'A',
            explanation: 'Clear vision helps you adjust direction safely.',
          },
          {
            id: '7-4',
            prompt: 'You want to enter deeper water.',
            options: [
              {key: 'A', text: 'Jump far'},
              {key: 'B', text: 'Enter gradually and adjust depth'},
              {key: 'C', text: 'Dive randomly'},
              {key: 'D', text: 'Run in'},
            ],
            correctKey: 'B',
            explanation:
              'Gradual entry helps your body adapt to depth changes.',
          },
          {
            id: '7-5',
            prompt: 'You feel pushed by a wave unexpectedly.',
            options: [
              {key: 'A', text: 'Fight it'},
              {key: 'B', text: 'Freeze'},
              {key: 'C', text: 'Adjust your body with the movement'},
              {key: 'D', text: 'Dive'},
            ],
            correctKey: 'C',
            explanation: 'Working with the motion reduces resistance.',
          },
        ],
      },
      {
        id: '8',
        title: 'LEVEL 8',
        questions: [
          {
            id: '8-1',
            prompt: 'You’re near a slide exit zone.',
            options: [
              {key: 'A', text: 'Sit there'},
              {key: 'B', text: 'Keep distance from the exit area'},
              {key: 'C', text: 'Stay nearby'},
              {key: 'D', text: 'Turn back'},
            ],
            correctKey: 'B',
            explanation: 'Exit zones need to stay clear for incoming riders.',
          },
          {
            id: '8-2',
            prompt: 'You see a strong current area.',
            options: [
              {key: 'A', text: 'Enter slowly and observe flow first'},
              {key: 'B', text: 'Jump in fast'},
              {key: 'C', text: 'Dive immediately'},
              {key: 'D', text: 'Stand still'},
            ],
            correctKey: 'A',
            explanation: 'Understanding the flow helps you adjust movement.',
          },
          {
            id: '8-3',
            prompt: 'You’re holding onto the pool edge.',
            options: [
              {key: 'A', text: 'Push off hard'},
              {key: 'B', text: 'Let go suddenly'},
              {key: 'C', text: 'Release gradually and stabilize yourself'},
              {key: 'D', text: 'Jump back'},
            ],
            correctKey: 'C',
            explanation: 'Smooth transitions help maintain balance.',
          },
          {
            id: '8-4',
            prompt: 'You’re carrying small items in water.',
            options: [
              {key: 'A', text: 'Keep them secure or leave aside'},
              {key: 'B', text: 'Hold loosely'},
              {key: 'C', text: 'Throw them'},
              {key: 'D', text: 'Ignore'},
            ],
            correctKey: 'A',
            explanation: 'Loose items can shift and distract your movement.',
          },
          {
            id: '8-5',
            prompt: 'You want to change direction quickly in water.',
            options: [
              {key: 'A', text: 'Turn sharply'},
              {key: 'B', text: 'Slow slightly and adjust direction'},
              {key: 'C', text: 'Stop suddenly'},
              {key: 'D', text: 'Dive'},
            ],
            correctKey: 'B',
            explanation: 'Gradual turns keep your movement controlled.',
          },
        ],
      },
      {
        id: '9',
        title: 'LEVEL 9',
        questions: [
          {
            id: '9-1',
            prompt: 'You feel a sudden drop in pool depth.',
            options: [
              {key: 'A', text: 'Adjust posture and stay balanced'},
              {key: 'B', text: 'Ignore'},
              {key: 'C', text: 'Dive'},
              {key: 'D', text: 'Panic'},
            ],
            correctKey: 'A',
            explanation: 'Body adjustment helps adapt to depth changes.',
          },
          {
            id: '9-2',
            prompt: 'You’re entering water from a platform.',
            options: [
              {key: 'A', text: 'Jump without checking'},
              {key: 'B', text: 'Look and enter with control'},
              {key: 'C', text: 'Dive randomly'},
              {key: 'D', text: 'Push off'},
            ],
            correctKey: 'B',
            explanation: 'Awareness of space helps avoid collisions.',
          },
          {
            id: '9-3',
            prompt: 'You get splashed heavily from all sides.',
            options: [
              {key: 'A', text: 'Ignore everything'},
              {key: 'B', text: 'Reposition to clearer space'},
              {key: 'C', text: 'Dive'},
              {key: 'D', text: 'Stay still'},
            ],
            correctKey: 'B',
            explanation: 'Better visibility improves reaction time.',
          },
          {
            id: '9-4',
            prompt: 'You’re moving in a crowded pool.',
            options: [
              {key: 'A', text: 'Speed up'},
              {key: 'B', text: 'Move slower and adjust path'},
              {key: 'C', text: 'Push through'},
              {key: 'D', text: 'Dive'},
            ],
            correctKey: 'B',
            explanation: 'Controlled speed keeps interactions predictable.',
          },
          {
            id: '9-5',
            prompt: 'You reach the pool edge.',
            options: [
              {key: 'A', text: 'Exit carefully using support'},
              {key: 'B', text: 'Climb out quickly'},
              {key: 'C', text: 'Jump out'},
              {key: 'D', text: 'Slide out'},
            ],
            correctKey: 'A',
            explanation: 'Using edges properly keeps movement stable.',
          },
        ],
      },
      {
        id: '10',
        title: 'LEVEL 10',
        questions: [
          {
            id: '10-1',
            prompt: 'You feel slightly disoriented after a slide.',
            options: [
              {key: 'A', text: 'Stand immediately'},
              {key: 'B', text: 'Take a moment to stabilize yourself'},
              {key: 'C', text: 'Run'},
              {key: 'D', text: 'Dive'},
            ],
            correctKey: 'B',
            explanation: 'A brief pause helps regain orientation.',
          },
          {
            id: '10-2',
            prompt: 'You’re on a floating element.',
            options: [
              {key: 'A', text: 'Move suddenly'},
              {key: 'B', text: 'Keep movements smooth and controlled'},
              {key: 'C', text: 'Jump off randomly'},
              {key: 'D', text: 'Shake it'},
            ],
            correctKey: 'B',
            explanation: 'Smooth motion keeps balance on unstable surfaces.',
          },
          {
            id: '10-3',
            prompt: 'You want to pass someone in water.',
            options: [
              {key: 'A', text: 'Go straight through'},
              {key: 'B', text: 'Move around with space'},
              {key: 'C', text: 'Push them'},
              {key: 'D', text: 'Dive under'},
            ],
            correctKey: 'B',
            explanation: 'Space helps avoid unexpected contact.',
          },
          {
            id: '10-4',
            prompt: 'You’re entering water after resting.',
            options: [
              {key: 'A', text: 'Jump in fast'},
              {key: 'B', text: 'Re-enter gradually and adjust'},
              {key: 'C', text: 'Dive'},
              {key: 'D', text: 'Run'},
            ],
            correctKey: 'B',
            explanation: 'Gradual entry helps your body adapt again.',
          },
          {
            id: '10-5',
            prompt: 'You’re leaving a wet area.',
            options: [
              {key: 'A', text: 'Run out'},
              {key: 'B', text: 'Walk steadily and keep balance'},
              {key: 'C', text: 'Jump'},
              {key: 'D', text: 'Slide'},
            ],
            correctKey: 'B',
            explanation: 'Controlled movement reduces slipping risk.',
          },
        ],
      },
      {
        id: '11',
        title: 'LEVEL 11',
        questions: [
          {
            id: '11-1',
            prompt:
              'You’re exiting a fast slide and water is still pushing you forward.',
            options: [
              {key: 'A', text: 'Let the water slow you, then stand up'},
              {key: 'B', text: 'Stand up immediately'},
              {key: 'C', text: 'Swim backward'},
              {key: 'D', text: 'Sit still'},
            ],
            correctKey: 'A',
            explanation:
              'Letting the motion settle first helps avoid losing balance.',
          },
          {
            id: '11-2',
            prompt: 'You enter a wave pool just before waves start.',
            options: [
              {key: 'A', text: 'Dive underwater'},
              {key: 'B', text: 'Stay where you can adjust quickly'},
              {key: 'C', text: 'Move deeper immediately'},
              {key: 'D', text: 'Turn your back'},
            ],
            correctKey: 'B',
            explanation: 'Flexible positioning helps react when waves begin.',
          },
          {
            id: '11-3',
            prompt: 'You’re holding a float in a crowded area.',
            options: [
              {key: 'A', text: 'Pull it fast through people'},
              {key: 'B', text: 'Let it drift'},
              {key: 'C', text: 'Move slowly and guide it around others'},
              {key: 'D', text: 'Push it ahead'},
            ],
            correctKey: 'C',
            explanation: 'Controlled movement keeps space predictable.',
          },
          {
            id: '11-4',
            prompt: 'You feel water pulling you slightly off balance.',
            options: [
              {key: 'A', text: 'Stop moving'},
              {key: 'B', text: 'Adjust body position with the flow'},
              {key: 'C', text: 'Resist strongly'},
              {key: 'D', text: 'Dive'},
            ],
            correctKey: 'B',
            explanation:
              'Small adjustments work better than strong resistance.',
          },
          {
            id: '11-5',
            prompt: 'You reach the bottom of a pool after a jump.',
            options: [
              {key: 'A', text: 'Stay still'},
              {key: 'B', text: 'Push up immediately'},
              {key: 'C', text: 'Regain orientation, then move up'},
              {key: 'D', text: 'Swim sideways'},
            ],
            correctKey: 'C',
            explanation:
              'Knowing your direction helps you move more efficiently.',
          },
        ],
      },
      {
        id: '12',
        title: 'LEVEL 12',
        questions: [
          {
            id: '12-1',
            prompt: 'You’re mid-slide and feel your position shifting.',
            options: [
              {key: 'A', text: 'Stay aligned and let the slide guide you'},
              {key: 'B', text: 'Try to turn'},
              {key: 'C', text: 'Sit up'},
              {key: 'D', text: 'Stop yourself'},
            ],
            correctKey: 'A',
            explanation: 'Slides are designed for forward alignment.',
          },
          {
            id: '12-2',
            prompt: 'You enter a pool with unclear depth.',
            options: [
              {key: 'A', text: 'Jump far'},
              {key: 'B', text: 'Dive in'},
              {key: 'C', text: 'Enter feet first and adjust gradually'},
              {key: 'D', text: 'Run in'},
            ],
            correctKey: 'C',
            explanation: 'Gradual entry helps adapt to unknown depth.',
          },
          {
            id: '12-3',
            prompt: 'You’re near a strong water jet area.',
            options: [
              {key: 'A', text: 'Turn your back'},
              {key: 'B', text: 'Approach gradually and test the flow'},
              {key: 'C', text: 'Stand directly in it'},
              {key: 'D', text: 'Jump into it'},
            ],
            correctKey: 'B',
            explanation: 'Testing flow helps you control balance.',
          },
          {
            id: '12-4',
            prompt: 'You’re swimming and someone crosses your path.',
            options: [
              {key: 'A', text: 'Speed up'},
              {key: 'B', text: 'Keep direction'},
              {key: 'C', text: 'Slow slightly and adjust path'},
              {key: 'D', text: 'Dive'},
            ],
            correctKey: 'C',
            explanation: 'Small adjustments prevent collisions.',
          },
          {
            id: '12-5',
            prompt: 'You’re stepping into water from a slippery edge.',
            options: [
              {key: 'A', text: 'Jump'},
              {key: 'B', text: 'Step quickly'},
              {key: 'C', text: 'Lower yourself with control'},
              {key: 'D', text: 'Slide in'},
            ],
            correctKey: 'C',
            explanation: 'Controlled entry keeps stability.',
          },
        ],
      },
      {
        id: '13',
        title: 'LEVEL 13',
        questions: [
          {
            id: '13-1',
            prompt: 'You’re in a lazy river with changing current speed.',
            options: [
              {key: 'A', text: 'Swim against it'},
              {key: 'B', text: 'Stop completely'},
              {key: 'C', text: 'Stay rigid'},
              {key: 'D', text: 'Adjust your movement with the flow'},
            ],
            correctKey: 'D',
            explanation: 'Adapting keeps movement smoother.',
          },
          {
            id: '13-2',
            prompt: 'You’re about to pass under a water feature.',
            options: [
              {key: 'A', text: 'Stop under it'},
              {key: 'B', text: 'Dive'},
              {key: 'C', text: 'Check space and pass smoothly'},
              {key: 'D', text: 'Rush through'},
            ],
            correctKey: 'C',
            explanation: 'Quick awareness helps avoid contact.',
          },
          {
            id: '13-3',
            prompt: 'You lose grip on a float.',
            options: [
              {key: 'A', text: 'Dive for it'},
              {key: 'B', text: 'Grab it instantly'},
              {key: 'C', text: 'Ignore surroundings'},
              {key: 'D', text: 'Reposition first, then reach for it'},
            ],
            correctKey: 'D',
            explanation: 'Stability first, then action.',
          },
          {
            id: '13-4',
            prompt: 'You feel pushed sideways by current.',
            options: [
              {key: 'A', text: 'Fight it hard'},
              {key: 'B', text: 'Stop'},
              {key: 'C', text: 'Dive'},
              {key: 'D', text: 'Adjust direction gradually'},
            ],
            correctKey: 'D',
            explanation: 'Gradual correction keeps balance.',
          },
          {
            id: '13-5',
            prompt: 'You’re climbing out of water onto a wet surface.',
            options: [
              {key: 'A', text: 'Pull up fast'},
              {key: 'B', text: 'Slide out'},
              {key: 'C', text: 'Use steady movement and support points'},
              {key: 'D', text: 'Jump out'},
            ],
            correctKey: 'C',
            explanation: 'Stable exit reduces slipping.',
          },
        ],
      },
      {
        id: '14',
        title: 'LEVEL 14',
        questions: [
          {
            id: '14-1',
            prompt: 'You enter a crowded wave pool during strong waves.',
            options: [
              {key: 'A', text: 'Dive'},
              {key: 'B', text: 'Stay still'},
              {key: 'C', text: 'Move randomly'},
              {key: 'D', text: 'Stay aware and adjust position constantly'},
            ],
            correctKey: 'D',
            explanation: 'Continuous adjustment helps maintain control.',
          },
          {
            id: '14-2',
            prompt: 'You’re on a multi-person float and it tilts slightly.',
            options: [
              {key: 'A', text: 'Stay rigid'},
              {key: 'B', text: 'Move suddenly'},
              {key: 'C', text: 'Adjust your weight gradually'},
              {key: 'D', text: 'Jump off'},
            ],
            correctKey: 'C',
            explanation: 'Small shifts help stabilize the float.',
          },
          {
            id: '14-3',
            prompt: 'You’re near the slide start platform.',
            options: [
              {key: 'A', text: 'Step ahead'},
              {key: 'B', text: 'Sit anywhere'},
              {key: 'C', text: 'Wait and follow the flow of turns'},
              {key: 'D', text: 'Move freely'},
            ],
            correctKey: 'C',
            explanation: 'Flow control keeps spacing consistent.',
          },
          {
            id: '14-4',
            prompt: 'You feel water pushing you backward.',
            options: [
              {key: 'A', text: 'Push forward hard'},
              {key: 'B', text: 'Dive'},
              {key: 'C', text: 'Stabilize and adjust direction gradually'},
              {key: 'D', text: 'Stop'},
            ],
            correctKey: 'C',
            explanation: 'Balance before direction.',
          },
          {
            id: '14-5',
            prompt: 'You’re entering a pool from a height.',
            options: [
              {key: 'A', text: 'Jump without thinking'},
              {key: 'B', text: 'Rush'},
              {key: 'C', text: 'Dive'},
              {key: 'D', text: 'Check landing space and enter controlled'},
            ],
            correctKey: 'D',
            explanation: 'Awareness improves landing control.',
          },
        ],
      },
      {
        id: '15',
        title: 'LEVEL 15 (EXPERT)',
        questions: [
          {
            id: '15-1',
            prompt: 'You’re disoriented after spinning in water.',
            options: [
              {key: 'A', text: 'Move immediately'},
              {key: 'B', text: 'Pause briefly to regain orientation'},
              {key: 'C', text: 'Swim fast'},
              {key: 'D', text: 'Dive'},
            ],
            correctKey: 'B',
            explanation: 'A short pause helps reset direction.',
          },
          {
            id: '15-2',
            prompt: 'You’re moving in fast water with limited space.',
            options: [
              {key: 'A', text: 'Speed up'},
              {key: 'B', text: 'Stop suddenly'},
              {key: 'C', text: 'Control speed and adjust gradually'},
              {key: 'D', text: 'Push through'},
            ],
            correctKey: 'C',
            explanation: 'Controlled speed gives better reaction time.',
          },
          {
            id: '15-3',
            prompt: 'You’re exiting a pool onto a busy area.',
            options: [
              {key: 'A', text: 'Move quickly'},
              {key: 'B', text: 'Jump out'},
              {key: 'C', text: 'Slide'},
              {key: 'D', text: 'Step out carefully and observe space'},
            ],
            correctKey: 'D',
            explanation: 'Transition zones require awareness.',
          },
          {
            id: '15-4',
            prompt: 'You feel a sudden shift in water depth and flow.',
            options: [
              {key: 'A', text: 'Ignore'},
              {key: 'B', text: 'Dive'},
              {key: 'C', text: 'Move fast'},
              {key: 'D', text: 'Adjust posture and stabilize first'},
            ],
            correctKey: 'D',
            explanation: 'Stability comes before movement.',
          },
          {
            id: '15-5',
            prompt: 'You’re surrounded by movement from all sides.',
            options: [
              {key: 'A', text: 'React randomly'},
              {key: 'B', text: 'Speed up'},
              {key: 'C', text: 'Dive'},
              {key: 'D', text: 'Slow down and read the space'},
            ],
            correctKey: 'D',
            explanation: 'Reading the environment helps you move smarter.',
          },
        ],
      },
    ],
    [],
  );

  const [shrkkwaterrshhLevelIdx, setShrkkwaterrshhLevelIdx] = useState(0);
  const [shrkkwaterrshhQuestionIdx, setShrkkwaterrshhQuestionIdx] = useState(0);
  const [shrkkwaterrshhPhase, setShrkkwaterrshhPhase] =
    useState<ShrkkwaterrshhQizPhase>('question');
  const [shrkkwaterrshhSelectedKey, setShrkkwaterrshhSelectedKey] = useState<
    ShrkkwaterrshhQizOption['key'] | null
  >(null);
  const [shrkkwaterrshhScore, setShrkkwaterrshhScore] = useState(0);

  const shrkkwaterrshhLevel = shrkkwaterrshhLevels[shrkkwaterrshhLevelIdx];
  const shrkkwaterrshhQuestion =
    shrkkwaterrshhLevel.questions[shrkkwaterrshhQuestionIdx];

  const shrkkwaterrshhOnChoose = (key: ShrkkwaterrshhQizOption['key']) => {
    if (shrkkwaterrshhSelectedKey) {
      return;
    }
    setShrkkwaterrshhSelectedKey(key);
    if (key === shrkkwaterrshhQuestion.correctKey) {
      setShrkkwaterrshhScore(s => s + 1);
    }
    setTimeout(() => {
      setShrkkwaterrshhPhase('explanation');
    }, 350);
  };

  const shrkkwaterrshhOnContinue = () => {
    if (shrkkwaterrshhQuestionIdx < shrkkwaterrshhLevel.questions.length - 1) {
      setShrkkwaterrshhQuestionIdx(i => i + 1);
      setShrkkwaterrshhSelectedKey(null);
      setShrkkwaterrshhPhase('question');
      return;
    }
    setShrkkwaterrshhPhase('result');
  };

  const shrkkwaterrshhTryAgain = () => {
    setShrkkwaterrshhQuestionIdx(0);
    setShrkkwaterrshhSelectedKey(null);
    setShrkkwaterrshhScore(0);
    setShrkkwaterrshhPhase('question');
  };

  const shrkkwaterrshhNextLevel = () => {
    const next = Math.min(
      shrkkwaterrshhLevels.length - 1,
      shrkkwaterrshhLevelIdx + 1,
    );
    setShrkkwaterrshhLevelIdx(next);
    setShrkkwaterrshhQuestionIdx(0);
    setShrkkwaterrshhSelectedKey(null);
    setShrkkwaterrshhScore(0);
    setShrkkwaterrshhPhase('question');
  };

  const shrkkwaterrshhResult =
    shrkkwaterrshhPickResultText(shrkkwaterrshhScore);

  return (
    <Shrkkwaterrshhlayt>
      <View style={styles.shrkkwaterrshhFullFlex}>
        <ShrkkwaterrshhQizTopBar
          title="Water Sense Flow"
          onExit={() => navigation.goBack()}
        />

        {shrkkwaterrshhPhase === 'result' ? (
          <View style={styles.shrkkwaterrshhCenter}>
            <Image source={require('../../elements/i/shrkkwaterrres.png')} />

            <LinearGradient
              colors={['#BFFDEE', '#3FCFAD']}
              style={styles.shrkkwaterrshhResultCard}>
              <View style={{padding: 12}}>
                <View
                  style={{
                    padding: 15,
                    borderWidth: 1,
                    borderColor: '#041E4A',
                    borderRadius: 18,
                  }}>
                  <Text style={styles.shrkkwaterrshhResultTitle}>
                    {shrkkwaterrshhResult.title}
                  </Text>
                  <Text style={styles.shrkkwaterrshhResultBody}>
                    {shrkkwaterrshhResult.body}
                  </Text>
                </View>
              </View>
            </LinearGradient>

            <View style={styles.shrkkwaterrshhResultBtns}>
              <TouchableOpacity
                activeOpacity={0.85}
                onPress={shrkkwaterrshhNextLevel}>
                <ImageBackground
                  source={require('../../elements/i/shrkkwaterrlonextbt.png')}
                  resizeMode="stretch"
                  style={styles.shrkkwaterrshhRedBtn}>
                  <Text style={styles.shrkkwaterrshhRedBtnText}>
                    Next Level
                  </Text>
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.85}
                onPress={shrkkwaterrshhTryAgain}>
                <ImageBackground
                  source={require('../../elements/i/shrkkwaterrlonextbt.png')}
                  resizeMode="stretch"
                  style={styles.shrkkwaterrshhRedBtn}>
                  <Text style={styles.shrkkwaterrshhRedBtnText}>Try Again</Text>
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.85}
                onPress={() =>
                  shrkkwaterrshhShareResult({
                    levelTitle: shrkkwaterrshhLevel.title,
                    score: shrkkwaterrshhScore,
                    total: shrkkwaterrshhLevel.questions.length,
                  })
                }>
                <ImageBackground
                  source={require('../../elements/i/shrkkwaterrlonextbt.png')}
                  resizeMode="stretch"
                  style={styles.shrkkwaterrshhRedBtn}>
                  <Text style={styles.shrkkwaterrshhRedBtnText}>Share</Text>
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.85}
                style={{marginBottom: 20}}
                onPress={() => navigation.goBack()}>
                <ImageBackground
                  source={require('../../elements/i/shrkkwaterrlonextbt.png')}
                  resizeMode="stretch"
                  style={styles.shrkkwaterrshhRedBtn}>
                  <Text style={styles.shrkkwaterrshhRedBtnText}>Exit</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
        ) : shrkkwaterrshhPhase === 'explanation' ? (
          <View style={[styles.shrkkwaterrshhCenter, {marginTop: 90}]}>
            <LinearGradient
              colors={['#FFF3DA', '#C9FFB6']}
              style={styles.shrkkwaterrshhExplainCard}>
              <View style={{padding: 16}}>
                <Text style={styles.shrkkwaterrshhExplainText}>
                  {shrkkwaterrshhQuestion.explanation}
                </Text>
              </View>
            </LinearGradient>

            <TouchableOpacity
              activeOpacity={0.85}
              onPress={shrkkwaterrshhOnContinue}>
              <ImageBackground
                source={require('../../elements/i/shrkkwaterrlonecont.png')}
                resizeMode="stretch"
                style={styles.shrkkwaterrshhOrangeBtn}>
                <Text style={styles.shrkkwaterrshhOrangeBtnText}>Continue</Text>
              </ImageBackground>
            </TouchableOpacity>

            <Image
              source={require('../../elements/i/shrkkwaterrrqzg.png')}
              style={{marginTop: 20}}
            />
          </View>
        ) : (
          <View style={styles.shrkkwaterrshhQuestionWrap}>
            <LinearGradient
              colors={['#FFF3DA', '#C9FFB6']}
              style={styles.shrkkwaterrshhPromptCard}>
              <View style={{padding: 16}}>
                <Text style={styles.shrkkwaterrshhPromptText}>
                  {shrkkwaterrshhQuestion.prompt}
                </Text>
              </View>
            </LinearGradient>

            <View style={styles.shrkkwaterrshhOptions}>
              {shrkkwaterrshhQuestion.options.map(opt => {
                const isChosen = shrkkwaterrshhSelectedKey === opt.key;
                const isCorrect = opt.key === shrkkwaterrshhQuestion.correctKey;
                const showAnswered = !!shrkkwaterrshhSelectedKey;

                const bgStyle = showAnswered
                  ? isCorrect
                    ? styles.shrkkwaterrshhOptCorrect
                    : styles.shrkkwaterrshhOptWrong
                  : styles.shrkkwaterrshhOptIdle;

                return (
                  <TouchableOpacity
                    key={opt.key}
                    activeOpacity={0.9}
                    disabled={showAnswered}
                    onPress={() => shrkkwaterrshhOnChoose(opt.key)}
                    style={[
                      styles.shrkkwaterrshhOptBtn,
                      bgStyle,
                      isChosen ? styles.shrkkwaterrshhOptChosen : null,
                    ]}>
                    <Text style={styles.shrkkwaterrshhOptText}>{opt.text}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            <Image
              source={require('../../elements/i/shrkkwaterrrqzg.png')}
              style={{marginTop: 20}}
            />
          </View>
        )}
      </View>
    </Shrkkwaterrshhlayt>
  );
};

const styles = StyleSheet.create({
  shrkkwaterrshhOptText: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 15,
    textAlign: 'center',
  },

  shrkkwaterrshhOptIdle: {
    backgroundColor: '#041E4A',
  },

  shrkkwaterrshhOptCorrect: {
    backgroundColor: '#195E04',
  },
  shrkkwaterrshhFullFlex: {flex: 1},
  shrkkwaterrshhTopBar: {
    paddingTop: 60,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  shrkkwaterrshhExitBtn: {
    backgroundColor: '#041E4A',
    borderRadius: 22,
    paddingHorizontal: 16,
    height: 48,
    justifyContent: 'center',
    width: 85,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
  },
  shrkkwaterrshhExitText: {color: '#FFFFFF', fontWeight: '700', fontSize: 14},
  shrkkwaterrshhTitlePill: {
    backgroundColor: '#041E4A',
    borderRadius: 28,
    paddingHorizontal: 18,
    minHeight: 48,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
    minWidth: 220,
    alignItems: 'center',
  },
  shrkkwaterrshhTitleText: {color: '#FFFFFF', fontWeight: '600', fontSize: 16},

  shrkkwaterrshhCenter: {
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    gap: 16,
  },
  shrkkwaterrshhRing: {
    width: 170,
    height: 170,
    marginBottom: 6,
  },
  shrkkwaterrshhRingBottom: {
    width: 170,
    height: 170,
    marginTop: 18,
  },

  shrkkwaterrshhPromptCard: {
    borderRadius: 18,
    width: '81%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#041E4A',
    marginTop: 40,
    minHeight: 110,
    justifyContent: 'center',
    marginBottom: 10,
  },
  shrkkwaterrshhPromptText: {
    color: '#061A2F',
    fontWeight: '500',
    fontSize: 18,
    textAlign: 'center',
  },

  shrkkwaterrshhQuestionWrap: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
  },
  shrkkwaterrshhOptions: {
    width: '78%',
    alignSelf: 'center',
    marginTop: 18,
    gap: 5,
  },
  shrkkwaterrshhOptBtn: {
    borderRadius: 28,
    minHeight: 43,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 18,
  },

  shrkkwaterrshhOptWrong: {
    backgroundColor: '#890F0E',
  },
  shrkkwaterrshhOptChosen: {
    borderColor: 'rgba(255,255,255,0.6)',
  },

  shrkkwaterrshhExplainCard: {
    borderRadius: 18,
    width: '84%',
    borderWidth: 1,
    borderColor: '#041E4A',
    minHeight: 140,
    justifyContent: 'center',
    marginBottom: 40,
  },
  shrkkwaterrshhExplainText: {
    color: '#061A2F',
    fontWeight: '700',
    fontSize: 18,
    textAlign: 'center',
  },
  shrkkwaterrshhOrangeBtn: {
    width: 190,
    height: 43,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shrkkwaterrshhOrangeBtnText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.45)',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 3,
  },

  shrkkwaterrshhResultCard: {
    borderRadius: 18,
    width: '88%',
  },
  shrkkwaterrshhResultTitle: {
    color: '#061A2F',
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  shrkkwaterrshhResultBody: {
    color: '#061A2F',
    fontWeight: '600',
    fontSize: 15,
    textAlign: 'center',
  },
  shrkkwaterrshhResultBtns: {
    width: '88%',
    gap: 8,
    marginTop: 8,
  },
  shrkkwaterrshhRedBtn: {
    width: 180,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  shrkkwaterrshhRedBtnText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.45)',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 3,
  },
});

export default Shrkkwaterrshhqizgmp;
