import os
import sys
import math
import numpy as np
from numpy.random import seed
from numpy.random import uniform
from numpy.random import randint
from itertools import permutations 
import random
try: 
  import simplejson as json
except:
  import json


pwd = os.getcwd()
difficulty = 2
FIX_DUR = 12
INIT_FIX_DUR = 0
CHOICE_DUR = 3.000
END_FIX_DUR = 0.500
EVENTS_PER_TRIAL = difficulty + 1
TRIALS_PER_BLOCK = 4
COND_NAMES = ['Easy', 'Hard']
#condition_blocks: 0=fixation, 1=easy, 2=hard
orders = [[0, 1, 2, 2, 1, 0, 2, 1, 1,2, 0, 1, 2, 2, 1, 0],
    [0, 2, 1, 1, 2, 0, 1, 2, 2, 1, 0, 2, 1, 1, 2, 0]]

o = orders[0]
num_of_event = TRIALS_PER_BLOCK * EVENTS_PER_TRIAL * sum(1 for n in o if n != 0)
#construct grids for experiment

grids = [[[], []], [[], []]]
pairs = [[0,1], [0,4], [1,2], [1,5], [2,3],
   [2,6], [3,7], [4,5], [4,8], [5,6],
   [5,9], [6,7], [6,10], [7,11],
   [8,9], [9,10], [10,11], [0,8], [3,11]]
for i in range(int(num_of_event/EVENTS_PER_TRIAL)):
    squares = []
    squaresBad = []
    for j in range(EVENTS_PER_TRIAL-1):
        if ((i+1) % 2 == 0):
            r = int(math.floor(12 * uniform(0, 1)))
            while (squares.count(r) > 0):
                r = int(math.floor(12 * uniform(0, 1)))
            squares.append(r)
            if j+1 == (EVENTS_PER_TRIAL-1):
                r = int(math.floor(12 * uniform(0, 1)))
                while (squares.count(r) > 0):
                    r = int(math.floor(12 * uniform(0, 1)))
                squaresBad = [squares[k] for k in range(len(squares)-1)]
                squaresBad.append(r)
        else:
            r = int(math.floor(19 * uniform(0, 1)))
            while ((squares.count(pairs[r][0]) > 0) or (squares.count(pairs[r][1]) > 0)):
                r = int(math.floor(19 * uniform(0, 1)))
            squares.append(pairs[r][0])
            squares.append(pairs[r][1])
            if (j+1 == EVENTS_PER_TRIAL-1):
                ra = int(math.floor(12 * uniform(0, 1)))
                rb = int(math.floor(12 * uniform(0, 1)))
                while (squares.count(ra) > 0):
                    ra = int(math.floor(12 * uniform(0, 1)))
                while (squares.count(ra) > 0) or (squares.count(rb) > 0):
                    rb = int(math.floor(12 * uniform(0, 1)))
                squaresBad = [squares[k] for k in range(len(squares)-2)]
                squaresBad.append(ra)
                squaresBad.append(rb)
    grids[0][(i+1)%2].append([squares[k] for k in np.array(np.random.permutation(len(squares)))])
    grids[1][(i+1)%2].append([squaresBad[p] for p in np.array(np.random.permutation(len(squaresBad)))])
FinalGrids = [[[],[]],[[],[]]]
FinalGrids[0][0] = [grids[0][0][k] for k in range(len(grids[0][0]))]
FinalGrids[0][1] = [grids[1][0][k] for k in range(len(grids[1][0]))]
FinalGrids[1][0] = [grids[0][1][k] for k in range(len(grids[0][1]))]
FinalGrids[1][1] = [grids[1][1][k] for k in range(len(grids[1][1]))]

StimProperty = {
    "StimFirstBlock": [],
    "StimSecondBlock": [],
    "Stim": [],
    "CorrectSide": "",
    "FalseBlock": []
}

StimSequence = []
for i in o:
    if(i == 0):
       StimSequence.append('Fixation')
    else:
        
        for j in range(TRIALS_PER_BLOCK):
            Side2Pick = [0,1]
            CorrectSide = randint(0,2)
            random.shuffle(Side2Pick)
            for k in range(difficulty*i):
                FalseBlock1 = []
                FalseBlock2 = []
                StimProperty = {
                    "StimFirstBlock": [],
                    "StimSecondBlock": [],
                    "Stim": [],
                    "CorrectSide": 0,
                    "FalseBlock": []
                    }
            for q in range(k+1):
                if(q%2 == 0):
                    StimProperty["StimFirstBlock"].append(FinalGrids[i-1][Side2Pick[0]][0][q])
                    FalseBlock1.append(FinalGrids[i-1][Side2Pick[1]][0][q])
                else:
                    StimProperty["StimSecondBlock"].append(FinalGrids[i-1][Side2Pick[0]][0][q])
                    FalseBlock2.append(FinalGrids[i-1][Side2Pick[1]][0][q])
            
            StimProperty["Stim"] = [StimProperty["StimFirstBlock"],StimProperty["StimSecondBlock"]]
            StimProperty["FalseBlock"] = [FalseBlock1,FalseBlock2]
            FinalGrids[i-1][Side2Pick[0]].pop(0)
            FinalGrids[i-1][Side2Pick[1]].pop(0)
            StimProperty["CorrectSide"] = CorrectSide
            StimSequence.append(StimProperty)

MDExpJsonData = json.dumps(StimSequence)
data = json.loads(MDExpJsonData)
MDsTimSeq = json.dumps(data, ensure_ascii=False)
print(MDsTimSeq)


