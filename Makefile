SHELL_PATH=host

REMOTE1_PATH=remote1
REMOTE2_PATH=remote2

install:
	cd $(SHELL_PATH) && yarn
	cd $(REMOTE2_PATH) && yarn
	cd $(REMOTE1_PATH) && yarn

build:
	cd $(SHELL_PATH) && yarn build
	cd $(REMOTE2_PATH) && yarn build
	cd $(REMOTE1_PATH) && yarn build


deduplicate:
	cd $(SHELL_PATH) && yarn deduplicate &
	cd $(REMOTE1_PATH) && yarn deduplicate &
	cd $(REMOTE2_PATH) && yarn deduplicate &

preview:
	cd $(SHELL_PATH) && yarn preview &
	cd $(REMOTE1_PATH) && yarn preview &
	cd $(REMOTE2_PATH) && yarn preview &

dev:
	cd $(SHELL_PATH) && yarn dev &
	cd $(REMOTE1_PATH) && yarn dev &
#	cd $(REMOTE2_PATH) && yarn dev &
