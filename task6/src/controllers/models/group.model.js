class Group {
    constructor(GroupTable, userGroup, db){
        this.Groups = GroupTable;
        this.UserGroups = userGroup;
        this.db = db;
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

    async removeGroup(req) {
        let transaction;
        const currentGroup = req.params.id;
        if (currentGroup) {
            try {
                transaction = await this.db.transaction();
                await this.UserGroups.deleteByGroupId(currentGroup);
                const group = await this.Groups.destroy({
                    where: {
                        id: currentGroup
                    },
                    transaction,
                    returning: true
                });
                await transaction.commit();
                return group;
            } catch (e) {
                if (transaction) await transaction.rollback();
                console.log(e);
            }
        };
    };
}

module.exports = Group;
