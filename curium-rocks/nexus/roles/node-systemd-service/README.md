Node-Systemd-Service
=========

Creates a systemd unit that runs a node service using npm start. Uses nvm to setup node version for service.


Role Variables
--------------


| Variable | Description |
| -------- | ---------- |
| description | systemd unit description |
| after | systemd target that the unit will start after |
| working_directory | the working directory of the service |
| start_command | the command to start the service (this will be run with nvm-exec) |
| target | the target group that this unit is included in |
| service_name | the systemd service name |
| node_version | the node version this service requires (use nvm version names) |
| service_account | the service account this service will run under |
| source_folder | the location of the service source code |
| should_restart | if the service should be restarted |

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
