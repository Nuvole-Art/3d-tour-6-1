var APP_DATA = {
  "scenes": [
    {
      "id": "0-",
      "name": "Прихожая",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.20322335791795254,
        "pitch": 0.22962099507092049,
        "fov": 1.4824336702425438
      },
      "linkHotspots": [
        {
          "yaw": 1.2436344578561016,
          "pitch": 0.32428874064815894,
          "rotation": 0,
          "target": "1-"
        },
        {
          "yaw": 0.5424520959369854,
          "pitch": 0.3926934857191906,
          "rotation": 0,
          "target": "2---1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-",
      "name": "Санузел",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.48074565724154006,
        "pitch": 0.3186289299856284,
        "fov": 1.4824336702425438
      },
      "linkHotspots": [
        {
          "yaw": -1.5281089683649753,
          "pitch": 0.5590825262070922,
          "rotation": 0,
          "target": "0-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2---1",
      "name": "Кухня-гостиная 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.16531166535000708,
        "pitch": 0.3757841517557523,
        "fov": 1.4824336702425438
      },
      "linkHotspots": [
        {
          "yaw": 2.42971877473218,
          "pitch": 0.5033604924868271,
          "rotation": 0,
          "target": "0-"
        },
        {
          "yaw": -2.954236590702049,
          "pitch": 0.30104118627432364,
          "rotation": 0,
          "target": "3---2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3---2",
      "name": "Кухня-гостиная 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.5242892543760895,
        "pitch": 0.16941137699770792,
        "fov": 1.4824336702425438
      },
      "linkHotspots": [
        {
          "yaw": 0.1632519243024113,
          "pitch": 0.35054683015290067,
          "rotation": 0,
          "target": "2---1"
        },
        {
          "yaw": 0.7838648368497978,
          "pitch": 0.41023408414842955,
          "rotation": 0,
          "target": "0-"
        },
        {
          "yaw": 0.7778343750436072,
          "pitch": 0.14982580991208394,
          "rotation": 0,
          "target": "1-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
