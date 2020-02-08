class Group {
    constructor(GroupTable){
        this.Groups = GroupTable;
    };

    getGroups() {
        return this.Groups.findAll()
        .then(groups => {
            console.log("All groups:", JSON.parse(JSON.stringify(groups, null, 4)));
            return JSON.parse(JSON.stringify(groups, null, 4));
        });
    };

    getGroupById(req, res) {
        const currentGroup = req.params.id;
        if (currentGroup) {
            return this.Groups.findOne({
                where: {
                    id: currentGroup
                    }
            }).then((group) => {
                console.log("Current group:", JSON.parse(JSON.stringify(group, null, 4)));
                return JSON.parse(JSON.stringify(group, null, 4));
              });
        };
    };

    createGroup(req, res) {
        return this.Groups.create({
            name: req.body.name,
            id: Date.now(),
            permissions: ['READ', 'WRITE', 'DELETE', 'SHARE', 'UPLOAD_FILES']
        }).then(() => {
            console.log("Done");
        });
    };

    updateGroup(req, res) {
        const currentGroup = req.params.id;
        if (currentGroup) {
            return this.Groups.update({...req.body}, {
                where: {
                  id: currentGroup
                  }
                }
            ).then(() => {
                console.log("Done");
              });
        };
    };

    removeGroup(req) {
        const currentGroup = req.params.id;
        if (currentGroup) {
            return this.Groups.destroy({
                where: {
                  id: currentGroup
                  }
                }
            ).then(() => {
                console.log("Done");
              });
        };
    };
}

module.exports = Group;
