/**
 * UserPermission and GroupPermission types represent the permissions
 * granted to users and groups respectively.
 * These types are defined as arrays of strings, where each string
 * represents a specific permission.
 *
 * Example usage:
 * const userPermissions: UserPermission = ["read", "write", "delete"];
 * const groupPermissions: GroupPermission = ["read", "execute"];
 *
 * @typedef {string[]} UserPermission
 * @typedef {string[]} GroupPermission
 */

/**
 * Represents the permissions of a user.
 * @typedef {string[]} UserPermission
 */
export type UserPermission = string[];

/**
 * Represents the permissions of a group.
 * @typedef {string[]} GroupPermission
 */
export type GroupPermission = string[];
