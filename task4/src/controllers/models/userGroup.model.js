class UserGroup {
    constructor(userGroupModel, userModel, groupModel, db) {
        this.userGroupModel = userGroupModel;
        this.userModel = userModel;
        this.groupModel = groupModel;
        this.db = db;
    }

    async addUsersToGroup(groupId, userIds) {
        let transaction;
        try {
            transaction = await this.db.transaction();
            const group = await this.groupModel.findByPk(groupId, { transaction });

            if (!group) {
                await transaction.rollback();
                return `Group with the id of ${groupId} doesn't exist.`;
            }

            for (const userId of userIds) {
                const user = await this.userModel.findByPk(userId, { transaction });
                if (!user) {
                    await transaction.rollback();
                    return `User with the id of ${userId} doesn't exist.`;
                }
                
                await this.userGroupModel.create({
                    userId,
                    groupId
                }, { transaction });
            }

            await transaction.commit();
        } catch (e) {
            console.log(e);
            if (transaction) await transaction.rollback();

            return e;
        }
    }

    deleteByUserId(userId) {
        if (userId) {
            return this.userGroupModel.destroy({
                where: {
                    userId: userId
                  }
                }
            ).then(() => {
                console.log("Done");
              });
        };
    }

    deleteByGroupId(groupId) {
        if (groupId) {
            return this.userGroupModel.destroy({
                where: {
                    groupId: groupId
                  }
                }
            ).then(() => {
                console.log("Done");
              });
        };
    }
}

module.exports = UserGroup;
