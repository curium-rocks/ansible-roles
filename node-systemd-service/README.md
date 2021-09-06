Node-Systemd-Service
=========

Creates a systemd unit that runs a node service using npm start. Uses nvm to setup node version for service.


Role Variables
--------------


| Variable | Description |
| -------- | ---------- |
| description | systemd unit description |
| after | systemd target that the unit will start after |
| workingDirectory | the working directory of the service |
| startCommand | the command to start the service (this will be run with nvm-exec) |
| target | the target group that this unit is included in |
| serviceName | the systemd service name |
| nodeVersion | the node version this service requires (use nvm version names) |
| serviceAccount | the service account this service will run under |
| sourceFolder | the location of the service source code |
| shouldRestart | if the service should be restarted |

Example Playbook
----------------

``` yaml
---
- hosts: localhost
  remote_user: root
  roles:
    - role: node-systemd-service
      sourceFolder: ./test/
      shouldRestart: yes
```


License
-------

MIT
