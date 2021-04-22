// O(n) time O(d) space

function getLowestCommonManager(topManager, reportOne, reportTwo) {
    return getOrgInfo(topManager, reportOne, reportTwo).lowestCommonManager;
}

function getOrgInfo(manager, reportOne, reportTwo) {
    let numImportantReports = 0;
    for (const directReport of manager.directReports) {
        const orgInfo = getOrgInfo(directReport, reportOne, reportTwo);
        if (!!orgInfo.lowestCommonManager) return orgInfo;
        numImportantReports += orgInfo.numImportantReports;
    }
    if (manager === reportOne || manager === reportTwo) numImportantReports++;
    const lowestCommonManager = numImportantReports === 2 ? manager : null;
    return { lowestCommonManager, numImportantReports };
}

class OrgChart {
    constructor(name) {
        this.name = name;
        this.directReports = [];
    }
}
