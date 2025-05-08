var APP_DATA = {
  "scenes": [
    {
      "id": "0-parking",
      "name": "PARKING",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 5.497787143782138,
          "target": "1-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living",
      "name": "LIVING",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.04426807113977027,
        "pitch": -0.008023520666037953,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.04426807113977027,
          "pitch": -0.008023520666037953,
          "rotation": 4.71238898038469,
          "target": "0-parking"
        },
        {
          "yaw": -0.9697091515804495,
          "pitch": 0.02124785177487709,
          "rotation": 4.71238898038469,
          "target": "0-parking"
        },
        {
          "yaw": 1.978813023788116,
          "pitch": 0.23013954988302032,
          "rotation": 0.7853981633974483,
          "target": "7-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining",
      "name": "DINING",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -0.40944360684989434,
          "pitch": -0.022297192032798563,
          "rotation": 5.497787143782138,
          "target": "7-kitchen"
        },
        {
          "yaw": -1.2439032655248727,
          "pitch": 0.09640862477131407,
          "rotation": 5.497787143782138,
          "target": "5-mbed-roomn"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kids-bed-room",
      "name": "KIDS BED ROOM",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "3-kids-bed-room"
        },
        {
          "yaw": 2.344571936646968,
          "pitch": 0.04077916220504818,
          "rotation": 12.566370614359176,
          "target": "2-dining"
        },
        {
          "yaw": -1.9441302447592168,
          "pitch": 0.04991763236307989,
          "rotation": 5.497787143782138,
          "target": "4-toilet1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-toilet1",
      "name": "TOILET1",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "4-toilet1"
        },
        {
          "yaw": -3.0914678099641577,
          "pitch": 0.07149045068750048,
          "rotation": 0.7853981633974483,
          "target": "3-kids-bed-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-mbed-roomn",
      "name": "M.BED ROOMN",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "5-mbed-roomn"
        },
        {
          "yaw": -1.8046535233611092,
          "pitch": 0.2600471504562396,
          "rotation": 0.7853981633974483,
          "target": "1-living"
        },
        {
          "yaw": -1.7577581407526637,
          "pitch": 0.015567523328630983,
          "rotation": 0.7853981633974483,
          "target": "0-parking"
        },
        {
          "yaw": 2.6923810057822797,
          "pitch": 0.00026303088824519705,
          "rotation": 0.7853981633974483,
          "target": "6-toilet2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-toilet2",
      "name": "TOILET2",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.008694142065877486,
        "pitch": -0.021265120076961352,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -0.008694142065877486,
          "pitch": -0.021265120076961352,
          "rotation": 0,
          "target": "6-toilet2"
        },
        {
          "yaw": 1.5607916917412155,
          "pitch": 0.0805048372436783,
          "rotation": 5.497787143782138,
          "target": "5-mbed-roomn"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-kitchen",
      "name": "KITCHEN",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "7-kitchen"
        },
        {
          "yaw": 1.341468793428934,
          "pitch": 0.02925190922301013,
          "rotation": 6.283185307179586,
          "target": "2-dining"
        },
        {
          "yaw": 1.5027595371913414,
          "pitch": -0.033393925041934835,
          "rotation": 5.497787143782138,
          "target": "3-kids-bed-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
