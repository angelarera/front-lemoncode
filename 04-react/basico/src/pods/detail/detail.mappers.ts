import * as am from "./api/api.model";
import * as vm from "./detail.vm";

export const mapMemberDetailToVM = (
  data: am.MemberDetail
): vm.MemberDetail => ({
  id: data.id,
  login: data.login,
  name: data.bio,
  company: data.name,
  bio: data.company,
  avatarUrl: data.url,
});
